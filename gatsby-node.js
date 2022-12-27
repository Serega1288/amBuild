const path = require('path');


const pageCheckout = path.resolve(`./src/templates/PageCheckout.js`)
const pageTemplate = path.resolve(`./src/templates/Page.js`)
const pageTemplateConstructor = path.resolve(`./src/templates/PageConstructor.js`)
const categoriesProduct = path.resolve(`./src/templates/Categories.js`)
const pageProduct = path.resolve(`./src/templates/pageProduct.js`)

//const frontTemplate = path.resolve('./src/templates/FrontPage.js')
//const postTemplate = path.resolve(`./src/templates/post.js`)
//const blogTemplate = path.resolve(`./src/templates/blog.js`)
// const categoryProductTemplate = path.resolve(`./src/templates/Categories.js`)
// const productTemplate = path.resolve(`./src/templates/Product.js`)

//
// const createBlogPage = (createPage, posts) => {
//
//     const { nodes } = posts;
//     const postsPerPage = 4;
//     const numPages = Math.ceil(nodes.length / postsPerPage);
//
//     Array.from({length: numPages}).forEach((_,i) =>{
//         createPage({
//             path: i === 0 ? '/blog/' : `/blog/page/${i + 1}`,
//             component: blogTemplate,
//             context: {
//                 limit: postsPerPage,
//                 skip: i * postsPerPage,
//                 numPages,
//                 currentPage: i + 1,
//             }
//         })
//     })
// }

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    return graphql(`
        { 
           
          
          products:allWpProductD {
            nodes {
              id
              title
              uri
              featuredImage {
                node {
                  localFile {
                    publicURL
                  }
                }
              }
              staticOutputRatio {
                staticOutputRatioInfo
                staticOutputRatioValue
              }
              productCategories {
                nodes {
                  name
                  databaseId
                }
              }
               
              ACFdescription {
                fieldGroupName
                descriptionTitle
                descriptionList {
                  value
                  title
                  infoListDesc
                  infoListActive
                }
              }
               
              ACFstat {
                  durationStaticOutput
                  staticAnnualOutputRatio
                  staticCostRecoveryTime
                  staticCurrencyAcquisitionPrice
                  staticOutputRatio
                  title
                  desc1
                  desc2
                  desc3
                  desc4
                  desc5
              } 
              
              
            ACFpageProductsTopDetails {
              fieldGroupName
              minerModel
              textInfo
              pricedesc
              price
              power
              options {
                valuevalue
                title
              } 
              wraptopdescriptionlist {
                value
                title
                infoListDesc
                infoListActiveTop
              }
            }
              
              ACFconstructor {
                  const { 
                    ... on WpProductD_Acfconstructor_Const_Content {
                      alignhor
                      alignver
                      fieldGroupName
                      style 
                      text
                      title
                      titleSize
                    }
                    ... on WpProductD_Acfconstructor_Const_Banner {
                      alignhor
                      fieldGroupName
                      text
                      title
                      banner {
                        localFile {
                          publicURL
                        }
                      }
                    }
                    
                    ... on WpProductD_Acfconstructor_Const_BannerLite {
                        title
                        fieldGroupName
                        style 
                        alignhor
                        banner {
                          localFile {
                            publicURL
                          }
                        }
                    }
                    
                    ... on WpProductD_Acfconstructor_Const_BlockTabs {
                      fieldGroupName
                      title
                      tabs {
                        fieldGroupName
                        title
                        list {
                          title
                          editir
                        }
                      }
                    }
                    ... on WpProductD_Acfconstructor_Const_SliderContent {
                      fieldGroupName
                      title
                      slider {
                        title
                        text
                        subTitle
                        icon {
                          localFile {
                            publicURL
                          }
                        } 
                      }
                    }
                    
                    ... on WpProductD_Acfconstructor_Const_SliderContentImage {
                      fieldGroupName
                      title
                      slider {
                        style
                        title
                        text
                        icon { 
                          localFile {
                            publicURL
                          }
                        }
                      }
                    }
                    
                    ... on WpProductD_Acfconstructor_Const_SliderImage {
                      fieldGroupName
                      title
                      slider {
                        url
                        image {
                          localFile {
                            publicURL
                          }
                        }
                      }
                    }
                    
                    ... on WpProductD_Acfconstructor_Const_HelpCenter {
                      fieldGroupName
                      title
                      text1
                      text2
                      text3
                      title1
                      title2
                      title3
                      url1
                      url2
                      url3
                      icon1 {
                        localFile {
                          publicURL
                        }
                      }
                      icon2 {
                        localFile {
                          publicURL
                        }
                      } 
                      icon3 {
                        localFile {
                          publicURL
                        }
                      }
                    }
                     
                     
                    ... on WpProductD_Acfconstructor_Const_Blockproducts {
                      fieldGroupName 
                      button
                      buttonUrl
                      title
                      products {
                        ... on WpProductD {
                          title
                          uri
                          featuredImage { 
                            node {
                              localFile {
                                publicURL
                              }
                            }
                          }
                          staticOutputRatio {
                            staticOutputRatioInfo
                            staticOutputRatioValue
                          }
                          productCategories {
                            nodes {
                              name
                            }
                          }
                        }
                      }
                    }
                    
                       
                    ... on WpProductD_Acfconstructor_Const_Blockcollapse {
                        fieldGroupName
                        title
                        collapse {
                          title
                          editor
                        }
                    }
                     
                    
                  }
              }
              
              
            }
          }
            
            
          allWpProductCategory {
            nodes {
              name
              uri
              slug
              productsD {
                nodes { 
                          title
                          uri
                          featuredImage { 
                            node {
                              localFile {
                                publicURL
                              }
                            }
                          }
                          staticOutputRatio {
                            staticOutputRatioInfo
                            staticOutputRatioValue
                          }
                          productCategories {
                            nodes {
                              name
                            }
                          }
                }
              }
              bannerLite {
                title
                style
                alignhor
                banner {
                  localFile {
                    publicURL
                  }
                }  
              }
            }
          }
        
          page:allWpPage {
            nodes {
              slug
              title
              content
              isFrontPage  
              template {
                templateName
              } 
              ACFconstructor {
                  const { 
                    ... on WpPage_Acfconstructor_Const_Content {
                      alignhor
                      alignver
                      fieldGroupName
                      style
                      text
                      title
                      titleSize
                    }
                    ... on WpPage_Acfconstructor_Const_Banner {
                      alignhor
                      fieldGroupName
                      text
                      title
                      banner {
                        localFile {
                          publicURL
                        }
                      }
                    }
                    
                    ... on WpPage_Acfconstructor_Const_BannerLite {
                        title
                        fieldGroupName
                        style 
                        alignhor
                        banner {
                          localFile {
                            publicURL
                          }
                        }
                    }
                    
                    ... on WpPage_Acfconstructor_Const_BlockTabs {
                      fieldGroupName
                      title
                      tabs {
                        fieldGroupName
                        title
                        list {
                          title
                          editir
                        }
                      }
                    }
                    ... on WpPage_Acfconstructor_Const_SliderContent {
                      fieldGroupName
                      title
                      slider {
                        title
                        text
                        subTitle
                        icon {
                          localFile {
                            publicURL
                          }
                        } 
                      }
                    }
                    
                    ... on WpPage_Acfconstructor_Const_SliderContentImage {
                      fieldGroupName
                      title
                      slider {
                        style
                        title
                        text
                        icon { 
                          localFile {
                            publicURL
                          }
                        }
                      }
                    }
                    
                    ... on WpPage_Acfconstructor_Const_SliderImage {
                      fieldGroupName
                      title
                      slider {
                        url
                        image {
                          localFile {
                            publicURL
                          }
                        }
                      }
                    }
                    
                    ... on WpPage_Acfconstructor_Const_HelpCenter {
                      fieldGroupName
                      title
                      text1
                      text2
                      text3
                      title1
                      title2
                      title3
                      url1
                      url2
                      url3
                      icon1 {
                        localFile {
                          publicURL
                        }
                      }
                      icon2 {
                        localFile {
                          publicURL
                        }
                      } 
                      icon3 {
                        localFile {
                          publicURL
                        }
                      }
                    }
                     
                     
                    ... on WpPage_Acfconstructor_Const_Blockproducts {
                      fieldGroupName 
                      button
                      buttonUrl
                      title
                      products {
                        ... on WpProductD {
                          title
                          uri
                          featuredImage { 
                            node {
                              localFile {
                                publicURL
                              }
                            }
                          }
                          staticOutputRatio {
                            staticOutputRatioInfo
                            staticOutputRatioValue
                          }
                          productCategories {
                            nodes {
                              name
                            }
                          }
                        }
                      }
                    }
                    
                       
                    ... on WpPage_Acfconstructor_Const_Blockcollapse {
                        fieldGroupName
                        title
                        collapse {
                          title
                          editor
                        }
                    }
                     
                    
                  }
              } 
            }
          }
        } 
    `).then(results => {
        if (results.error) {
            throw  results.errors;
        }
        //const  { posts, categories } = results.data;
        // console.log('posts >>', posts.nodes)
        //console.log('categories >>', categories.nodes)


        // 1. cread pages do post
        // posts.nodes.forEach((post, index) => {
        //     const  previous = index === posts.nodes.length - 1 ? null : posts.nodes[index + 1];
        //     const  next = index === 0 ? null : posts.nodes[index - 1];
        //
        //     createPage({
        //         path: `${post.slug.current}`,
        //         component: postTemplate,
        //         context: {
        //             slug: post.slug.current,
        //             previous,
        //             next,
        //         }
        //     })
        // });

        // 2. home page
        //createFrontPage( createPage )


        // categoty  categoryTemplate

        results.data.products.nodes.forEach(product => {

            createPage({
                path: product.uri,
                component: pageProduct,
                context: product,
            })

        });

        results.data.allWpProductCategory.nodes.forEach(category => {

            createPage({
                path: category.uri,
                component: categoriesProduct,
                context: category,
            })

        });


        results.data.page.nodes.forEach(item => {

            if ( item.isFrontPage === true ) {


                if ( item.template.templateName === 'Constructor') {
                    createPage({
                        path: '/',
                        component: pageTemplateConstructor,
                        context: item,
                    })
                } else {
                    createPage({
                        path: '/',
                        component:  pageTemplate,
                        context: item,
                    })
                }

            } else {

                console.log('templateName >>', item.template.templateName)

                if ( item.template.templateName === 'Constructor') {
                    createPage({
                        path: `${item.slug}`,
                        component:  pageTemplateConstructor,
                        context: item,
                    })
                } else if ( item.template.templateName === 'Checkout') {
                    createPage({
                        path: `${item.slug}`,
                        component: pageCheckout,
                        context: item,
                    })
                } else {
                    createPage({
                        path: `${item.slug}`,
                        component:  pageTemplate,
                        context: item,
                    })
                }


            }

        });




    });
};