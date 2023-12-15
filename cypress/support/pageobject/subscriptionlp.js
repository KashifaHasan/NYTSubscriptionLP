class SubscriptionLP
{
    // constructor(){
    //     this.url = 'https://www.nytimes.com/subscription'
    // }

    navigateToUrl()
    {
        cy.visit('https://www.nytimes.com/subscription/')
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
        cy.get('.Navigation_list__d1k-0  li a').eq(0).scrollIntoView().click()
         //return cy.title().should('have.text','Digital Subscriptions – Help')
      //  cy.url().should('include','://help.nytimes.com/hc/en-us/articles/115015852367-Digital-subscriptions')
         cy.go('back')
    
        //Verify the destination url

    }

    contactUsFooter()
    {
        cy.get('.Navigation_list__d1k-0  li a').eq(1).scrollIntoView().click()
        cy.go('back')
    }

    giftSubsFooter()
    {
        cy.get('.Navigation_list__d1k-0  li a').eq(2).scrollIntoView().click()
        cy.go('back')
    }

    downloadAppFooter()
    {
        cy.get('.Navigation_list__d1k-0  li a').eq(3).scrollIntoView().click()
        cy.go('back')
    }
} 

export default SubscriptionLP;