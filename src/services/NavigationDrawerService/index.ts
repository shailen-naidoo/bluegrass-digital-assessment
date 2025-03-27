import { NavigationDrawerModel } from "@/models/NavigationDrawerModel"

class NavigationDrawerService {
  static getNavigationDrawerItems(): Promise<NavigationDrawerModel[]> {
    return fetch('http://localhost:3001/navigation_drawer')
      .then((res) => res.json())
      .then((res) => res.map(NavigationDrawerModel.create))
  }
}

export { NavigationDrawerService }