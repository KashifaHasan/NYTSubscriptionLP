class SubscriptionLP
{
    constructor(){
        this.url = 'https://www.nytimes.com/subscription'
    }

    navigateToUrl()
    {
        cy.visit(this.url)
    }

    verifyPageTitle()
    {
        //verifying the page title of the subscription page
        cy.title().should('eq','The New York Times: Digital and Home Delivery Subscriptions')
    }

    lpHeader() //LP Header verifying
    {
        return cy.get('.Icons_nytNameplateBlack__umY2X').should('be.visible')
    }

    // lpHeaderImage()
    //     {
    //         return cy.get('.Header_heroImageSlideshowContainerDesktop__').should('be.visible')
    //     }

    subscribeNow()
    {   
        cy.get('.Button_main__STdCJ').click()
        cy.go('back')
        //After that verify the page opens in a new tab as well as the url and the page title
    }

    lpCancel()
    {
        cy.get('.Header_cancelAnytime__MihHz').should('have.text', 'Cancel or pause anytime.')
    }

    lpPayPallogo()
    {
        return cy.get('.PaymentIcons_paypal__YwCt4').should('be.visible')
    }
    lpCreditCardslogo()
    {
        return cy.get('.PaymentIcons_creditCard__Qs6qB').should('be.visible')
    }

    legalVerify()
    {
        cy.get('.Legal_legal__vsBve').should('have.text', 'Offer for a New York Times All Access subscription; current subscribers not eligible. Subscription excludes print edition. Some games may be available without a subscription. Your payment method will automatically be charged in advance the introductory offer rate of $4 every 4 weeks for 6 months, and after 6 months the standard rate of $25 every 4 weeks. ')
    }

    nytAllAccessFooterlogo()
    {
       return cy.get('h1').should('include.text','New York Times All Access')
    }

    nytOtherSubsFooterlogo()
    {
       return cy.get('h1').should('include.text','Other Subscriptions')
    }

    faqsFooter()
    {
        cy.get('.Navigation_list__d1k-0  li a').eq(0).scrollIntoView().invoke('removeAttr','target').click()
        cy.visit(this.url)
        //Verify the destination url

    }

    contactUsFooter()
    {
        cy.get('.Navigation_list__d1k-0  li a').eq(1).scrollIntoView().click()
        cy.visit(this.url)
    }

    giftSubsFooter()
    {
        cy.get('.Navigation_list__d1k-0  li a').eq(2).scrollIntoView().click()
        cy.visit(this.url)
    }

    downloadAppFooter()
    {
        cy.get('.Navigation_list__d1k-0  li a').eq(3).scrollIntoView().click()
        cy.visit(this.url)
    }

    nytFooterLogo()
    {
        cy.get('.Icons_nytNameplateWhite__5MqaE').should('be.visible')
    }
    marketingQuote()
    {
        cy.get('.MarketingCopy_marketingCopy__vmrlW').should('have.text', 'We believe that great journalism has the power to make each reader’s life richer and more fulfilling, and all of society stronger and more just.')
    }

    nytIcon()
     {
        cy.get('.Icons_nytLogoT__DTMdb').should('be.visible')
     }

     nytFooterCP()
     {
        cy.get('.Bottom_copyright__Ek7X1').should('be.visible')
     }

     termsofSaleFooter()
     {
        cy.get('https://www.nytimes.com/content/help/rights/sale/terms-of-sale.html').click()
        // cy.get('Bottom_links__m52iA a').click()
        // cy.visit(this.url)
        //cy.get('Bottom_links__m52iA a').eq(0).scrollIntoView().click()
        cy.visit(this.url)
     }

     privacyPolicyFooter(){
        cy.get('Bottom_links__m52iA a').eq(1).scrollIntoView().click()
        cy.visit(this.url)
     }

} 

export default SubscriptionLP;