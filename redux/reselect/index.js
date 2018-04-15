

import { createSelector } from 'reselect'
import _groupBy from 'lodash/groupBy'

const getPresenters = state => state.resources.presenters
const getFilters = state => state.app.filterParams

export const presenterSelector = createSelector(
  getPresenters,
  getFilters,
  (resource, filters) => resource
)
