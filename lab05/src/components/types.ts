export interface Loader<TItem> {
    loading: boolean
    items: TItem[]
}

export interface Item<TItem> {
    item: TItem
}
