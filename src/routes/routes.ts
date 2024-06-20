import { lazy, LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

export interface RouteType {
  to: string
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

// prettier-ignore
const LazyOne = lazy(() => import(/* webpackChunckName: "LazyPage1"*/'../01-lazy-load/pages/LazyPageOne'))
// prettier-ignore
const LazyTwo = lazy(() => import(/* webpackChunckName: "LazyPage2"*/'../01-lazy-load/pages/LazyPageTwo'))
// prettier-ignore
const LazyThree = lazy(() => import(/* webpackChunckName: "LazyPage3"*/'../01-lazy-load/pages/LazyPageThree'))

// Prettier

export const routes: RouteType[] = [
  {
    to: '/lazy-one',
    path: 'lazy-one',
    Component: LazyOne,
    name: 'Lazy One',
  },
  {
    to: '/lazy-two',
    path: 'lazy-two',
    Component: LazyTwo,
    name: 'Lazy Two',
  },
  {
    to: '/lazy-three',
    path: 'lazy-three',
    Component: LazyThree,
    name: 'Lazy Three',
  },
]
