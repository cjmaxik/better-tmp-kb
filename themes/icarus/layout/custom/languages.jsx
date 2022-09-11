const { Component, Fragment } = require('inferno')

module.exports = class extends Component {
  render () {
    const { helper } = this.props
    const { url_for } = helper

    const versions = helper.getPageLanguages()

    return (
      versions && versions.length && versions.length >= 2
        ? <div className="notification is-info">
          This article is available in these languages:
          {(() => {
            const languages = []
            versions.forEach((version) => {
              languages.push(
                <a className="button is-dark is-small ml-2" href={url_for(version.url)}>
                  {version.name}
                </a>
              )
            })
            return languages
          })()}
        </div>
        : null
    )
  }
}
