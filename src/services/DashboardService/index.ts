import { DashboardModel } from "@/models/DashboardModel"

class DashboardService {
  static async getDashboardItems(): Promise<DashboardModel[]> {
    return fetch('http://localhost:3001/dashboard')
      .then((res) => res.json())
      .then((res) => res.map((item: DashboardModel) => DashboardModel.create(item)))

  }
}

export { DashboardService }