import { makeAutoObservable } from "mobx"

type Notebooks = {
  name: string
  count: string
  slug: string
}



class NotebookStore {

  notebooks: Notebooks[] = [
    {name: 'Test notebook name length overdohuya', count: '123', slug: 'test-slug-1'},
    {name: 'Test notebook name length overdohuya', count: '123', slug: 'test-slug-2'},
    {name: 'Test notebook name length overdohuya', count: '0', slug: 'test-slug-3'},
  ]

  constructor() {
    makeAutoObservable(this)
  }

}

export default new NotebookStore()