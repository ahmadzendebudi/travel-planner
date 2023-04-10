resource "azurerm_subnet" "aks_sn" {
  name                 = "sn"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.mysql_vn.name
  address_prefixes     = ["10.0.4.0/24"]
  
  depends_on = [
    azurerm_resource_group.rg,
    azurerm_virtual_network.mysql_vn
  ]
}


resource "azurerm_kubernetes_cluster" "aks" {
  name                = "travel-planner-aks1"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  dns_prefix          = "travelplanneraks1"

  network_profile {
    network_plugin = "azure"
  }

  default_node_pool {
    name           = "default"
    node_count     = 1
    vm_size        = "Standard_D2_v2"
    vnet_subnet_id = azurerm_subnet.aks_sn.id
  }

  identity {
    type = "SystemAssigned"
  }

  tags = {
    Environment = "Production"
  }
}
