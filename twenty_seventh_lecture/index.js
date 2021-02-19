fakeRequestPromise('yelp.com/api/cofee/page1')
    .then(() => {
        console.log('IT Worked (page1)')
        return fakeRequestPromise('yelp.com/api/cofee/page2')
    })
    .then(() => {
        console.log('IT Worked (page2)')
        return fakeRequestPromise('yelp.com/api/cofee/page3')
    })
    .then(() => {
        console.log('IT Worked (page3)')
    })
    .catch(() => {
        console.log('Error Occured !!')
    })
