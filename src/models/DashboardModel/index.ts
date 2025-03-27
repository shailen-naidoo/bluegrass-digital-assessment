class DashboardModel {
  name: string | null
  percentage_increase: number | null
  value: number | null

  constructor({ name = null, percentage_increase = null, value = null }) {
    this.name = name
    this.percentage_increase = percentage_increase
    this.value = value
  }

  static create = (dashboard = {}) => new DashboardModel(dashboard)
}

export { DashboardModel }