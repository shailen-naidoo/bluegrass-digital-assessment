class NavigationDrawerModel {
  name?: string
  icon?: string
  navigate_to?: string

  constructor({ name, icon, navigate_to }: { name?: string, icon?: string, navigate_to?: string }) {
    this.name = name
    this.icon = icon
    this.navigate_to = navigate_to
  }

  static create = (navigationDrawerModel = {}) => new NavigationDrawerModel(navigationDrawerModel)
}

export { NavigationDrawerModel }