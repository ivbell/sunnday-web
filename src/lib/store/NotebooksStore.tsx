import { makeAutoObservable } from "mobx"

type Notebooks = {
  name: string
  count: string
  slug: string
}



class NotebookStore {

  notebooks: Notebooks[] = [
    {name: 'Test notebook name length overdohuya', count: '123', slug: 'test-slug'},
    {name: 'Test notebook name length overdohuya', count: '123', slug: 'test-slug'},
    {name: 'Test notebook name length overdohuya', count: '123', slug: 'test-slug'},
  ]

  constructor() {
    makeAutoObservable(this)
  }

}

export default new NotebookStore()