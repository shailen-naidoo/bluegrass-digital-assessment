class DashboardModel {
  name: string | null
  percentage_increase: number | null
  icon: string | null
  value: number | null

  constructor({ name = null, percentage_increase = null, icon = null, value = null }) {
    this.name = name
    this.percentage_increase = percentage_increase
    this.icon = icon
    this.value = value
  }

  static create = (dashboard = {}) => new DashboardModel(dashboard)
}

export { DashboardModel }