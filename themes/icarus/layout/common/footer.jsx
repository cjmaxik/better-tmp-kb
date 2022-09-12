const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class Footer extends Component {
    render() {
        const {
            logo,
            logoUrl,
            siteUrl,
            siteTitle,
            siteYear,
            links
        } = this.props;

        let footerLogo = '';
        if (logo) {
            footerLogo = <img src={logoUrl} alt={siteTitle} height="28" />;
        } else {
            footerLogo = siteTitle;
        }

        return <footer class="footer">
            <div class="container">
                <div class="level">
                    <div class="level-start">
                        <a class="footer-logo is-block mb-2" href={siteUrl}>
                            {footerLogo}<span className="is-hidden-mobile">&nbsp;{siteTitle}</span>
                        </a>
                        <p class="is-size-7">
                            <span dangerouslySetInnerHTML={{ __html: `&copy; ${siteYear}` }}/>&nbsp;CJMAXiK&nbsp;and&nbsp;contributors.&nbsp;Powered by <a href="https://hexo.io/" target="_blank" rel="noopener">Hexo</a>&nbsp;&&nbsp;custom <a href="https://github.com/ppoffice/hexo-theme-icarus" target="_blank" rel="noopener">Icarus</a>.&nbsp;Hosted with <a href="https://pages.cloudflare.com">Cloudflare Pages</a>.
                            <br/><br/>
                            <span class="is-hidden-mobile is-italic">
                                This website is not in any way, shape or form affiliated or linked to TruckersMP&nbsp;Team and SCS&nbsp;Software.<br/>All product and company names are trademarks or registered trademarks of their respective holders.
                            </span>
                        </p>
                    </div>
                    <div class="level-end">
                        {Object.keys(links).length ? <div class="field has-addons">
                            {Object.keys(links).map(name => {
                                const link = links[name];
                                return <p class="control">
                                    <a class={`button is-transparent ${link.icon ? 'is-large' : ''}`} target="_blank" rel="noopener" title={name} href={link.url}>
                                        {link.icon ? <i class={link.icon}></i> : name}
                                    </a>
                                </p>;
                            })}
                        </div> : null}
                    </div>
                </div>
            </div>
        </footer>;
    }
}

module.exports = cacheComponent(Footer, 'common.footer', props => {
    const { config, helper } = props;
    const { url_for, date } = helper;
    const { logo, title, author, footer } = config;

    const links = {};
    if (footer && footer.links) {
        Object.keys(footer.links).forEach(name => {
            const link = footer.links[name];
            links[name] = {
                url: url_for(typeof link === 'string' ? link : link.url),
                icon: link.icon
            };
        });
    }

    return {
        logo,
        logoUrl: url_for(logo.image),
        siteUrl: url_for('/'),
        siteTitle: title,
        siteYear: date(new Date(), 'YYYY'),
        author,
        links
    };
});
