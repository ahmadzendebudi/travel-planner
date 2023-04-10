resource "azurerm_virtual_network" "mysql_vn" {
  name                = "vn"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  address_space       = ["10.0.0.0/16"]

  depends_on = [
    azurerm_resource_group.rg
  ]
}

resource "azurerm_subnet" "mysql_sn" {
  name                 = "sn"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.mysql_vn.name
  address_prefixes     = ["10.0.2.0/24"]
  service_endpoints    = ["Microsoft.Storage"]
  delegation {
    name = "fs"
    service_delegation {
      name = "Microsoft.DBforMySQL/flexibleServers"
      actions = [
        "Microsoft.Network/virtualNetworks/subnets/join/action",
      ]
    }
  }

  depends_on = [
    azurerm_resource_group.rg,
    azurerm_virtual_network.mysql_vn
  ]
}

resource "azurerm_private_dns_zone" "mysql_dns" {
  name                = "mysql-dns.mysql.database.azure.com"
  resource_group_name = azurerm_resource_group.rg.name
  depends_on = [
    azurerm_resource_group.rg
  ]
}

resource "azurerm_private_dns_zone_virtual_network_link" "mysql_dns_link" {
  name                  = "mysql-dns-link"
  private_dns_zone_name = azurerm_private_dns_zone.mysql_dns.name
  virtual_network_id    = azurerm_virtual_network.mysql_vn.id
  resource_group_name   = azurerm_resource_group.rg.name
  depends_on = [
    azurerm_resource_group.rg,
    azurerm_virtual_network.mysql_vn,
    azurerm_private_dns_zone.mysql_dns
  ]
}

resource "azurerm_mysql_flexible_server" "db" {
  name                   = "travel-planner-zendebudi"
  zone                   = 3
  resource_group_name    = azurerm_resource_group.rg.name
  location               = azurerm_resource_group.rg.location
  administrator_login    = try(var.mysql_administrator_login, "default-username")
  administrator_password = try(var.mysql_administrator_password, "5UQKxhL$6iz%SQ")
  backup_retention_days  = 7
  delegated_subnet_id    = azurerm_subnet.mysql_sn.id
  private_dns_zone_id    = azurerm_private_dns_zone.mysql_dns.id
  sku_name               = "GP_Standard_D2ds_v4"

  depends_on = [
    azurerm_private_dns_zone_virtual_network_link.mysql_dns_link
  ]
}