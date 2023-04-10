resource "azurerm_virtual_network_peering" "aks_to_mysql" {
  name                      = "peer_aks_to_mysql"
  resource_group_name       = azurerm_resource_group.rg.name
  virtual_network_name      = azurerm_virtual_network.aks_vn.name
  remote_virtual_network_id = azurerm_virtual_network.mysql_vn.id
  
  depends_on = [
    azurerm_virtual_network.aks_vn,
    azurerm_virtual_network.mysql_vn
  ]
}

resource "azurerm_virtual_network_peering" "mysql_to_aks" {
  name                      = "peer_mysql_to_aks"
  resource_group_name       = azurerm_resource_group.rg.name
  virtual_network_name      = azurerm_virtual_network.mysql_vn.name
  remote_virtual_network_id = azurerm_virtual_network.aks_vn.id

  depends_on = [
    azurerm_virtual_network.aks_vn,
    azurerm_virtual_network.mysql_vn
  ]
}
