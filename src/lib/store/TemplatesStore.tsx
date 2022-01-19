import { makeAutoObservable } from "mobx"

type Templates = {
  name: string
  count: string
  slug: string
}

class TempaltesStore {

  templates: Templates[] = [
    {name: 'Test template name length overdohuya', count: '123', slug: 'test-slug-1'},
    {name: 'Test template name length overdohuya', count: '123', slug: 'test-slug-2'},
    {name: 'Test template name length overdohuya', count: '0', slug: 'test-slug-3'},
  ]

  constructor() {
    makeAutoObservable(this)
  }

}

export default new TempaltesStore()