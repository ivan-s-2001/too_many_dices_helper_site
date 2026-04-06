import picketCharacter from './picket/character'
import picketOverviewPage from './picket/pages/overview'
import picketDicePage from './picket/pages/dice'
import picketToolsPage from './picket/pages/tools'
import picketMechanicsPage from './picket/pages/mechanics'

import tantrumCharacter from './tantrum/character'
import tantrumOverviewPage from './tantrum/pages/overview'

import patchesCharacter from './patches/character'
import patchesOverviewPage from './patches/pages/overview'

import boomerCharacter from './boomer/character'
import boomerOverviewPage from './boomer/pages/overview'

function buildCharacter(meta, pageModules) {
  const pagesById = Object.fromEntries(pageModules.map((page) => [page.id, page]))

  return {
    ...meta,
    pagesById,
  }
}

export default {
  picket: buildCharacter(picketCharacter, [
    picketOverviewPage,
    picketDicePage,
    picketToolsPage,
    picketMechanicsPage,
  ]),
  tantrum: buildCharacter(tantrumCharacter, [tantrumOverviewPage]),
  patches: buildCharacter(patchesCharacter, [patchesOverviewPage]),
  boomer: buildCharacter(boomerCharacter, [boomerOverviewPage]),
}
