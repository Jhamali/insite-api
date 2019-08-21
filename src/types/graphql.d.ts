export interface Context {}
export type Resolver = (
  parent: any,
  args: any,
  context: Context,
  info: any
) => any
export type Subscription = () => AsyncIterator<{}>
export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver | Subscription
  }
}
