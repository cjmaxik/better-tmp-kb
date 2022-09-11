function getPageLanguages () {
  /**
   * Extract page info
   * @param page
   * @returns {{lang: String, key: String, name: String}|null}
   */
  function pInfo (page) {
    const currentFolders = page.path.split('/')

    if (0 === currentFolders.length) {
      return null
    }

    const lang = currentFolders.shift()
    let key

    if (lang !== page.lang) {
      // do not start by language
      return null
    }

    if (page.contentId !== undefined) {
      key = page.contentId
    } else {
      key = currentFolders.join('/')
    }

    let name = lang
    switch (lang) {
      case 'ru':
        name = 'Русский'
        break
      case 'en':
        name = 'English'
        break
    }

    return {
      lang: lang,
      key: key,
      name: name
    }
  }

  const here = pInfo(this.page)
  const versions = []

  if (null === here) {
    return []
  }

  const pages = this.site.posts

  for (let i = 0; i < pages.length; i++) {
    // console.log(pages.data[i])
    const other = pInfo(pages.data[i])
    // console.log(other)
    if (null !== other && other.key === here.key) {
      versions.push({
        url: '/' + pages.data[i].path,
        lang: other.lang,
        name: other.name
      })
    }
  }

  return versions
}

hexo.extend.helper.register('getPageLanguages', getPageLanguages)

module.exports = getPageLanguages
