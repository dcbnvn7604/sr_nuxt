import { describe, test, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('page', async () => {
  await setup({})

  test('index', async () => {
    const html = await $fetch('/')
    expect(html).toContain('layout.default')
    expect(html).toContain('page.index')
  })

  test('custom', async () => {
    const html = await $fetch('/custom')
    debugger
    expect(html).toContain('layout.custom')
    expect(html).toContain('page.custom')
  })
})