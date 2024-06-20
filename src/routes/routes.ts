import { lazy, LazyExoticComponent } from 'react'
import NoLazy from '../01-lazy-load/pages/NoLazy'

type JSXComponent = () => JSX.Element

export interface RouteType {
  to: string
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

// prettier-ignore
const LazyLayout = lazy(() => import(/* webpackChunckName: "LazyLayoutPage"*/'../01-lazy-load/layout/LazyLayout'))

// Prettier

export const routes: RouteType[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy Load',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
]
