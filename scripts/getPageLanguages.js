function getPageLanguages () {
  /**
   * Extract page info
   * @param post
   * @returns {{lang: String, key: String, name: String}|null}
   */
  function pInfo (post) {
    const currentFolders = post.path.split('/')

    if (0 === currentFolders.length) {
      return null
    }

    const lang = currentFolders.shift()
    let key

    if (lang !== post.lang) {
      // do not start by language
      return null
    }

    if (post.incomplete) {
      // do not search within incomplete pages
      return null
    }

    if (post.contentId !== undefined) {
      key = post.contentId
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

// noinspection JSUnresolvedVariable
hexo.extend.helper.register('getPageLanguages', getPageLanguages)

module.exports = getPageLanguages
