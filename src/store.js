import { reactive } from "vue";

export const store = reactive({
    test:'test',
    MovieList:[
        {
            id:'01',
            imageSmall:'1-234x300.jpg',
            imageMedium:'1-234x300.jpg',
            imageXL:'1.jpg',
            name:'Hurry Animate Blue Strack New Movie',
            category:'Top Rating',
            views:'381'
        },
        {
            id:'02',
            imageSmall:'2-1-100x100.jpg',
            imageMedium:'2-1-300x300.jpg',
            imageXL:'2.jpg',
            name:'Quisque in Strack New Movie',
            category:'Coming Soon',
            views:'947'
        },
        {
            id:'03',
            imageSmall:'5-150x150.jpg',
            imageMedium:'5-300x300.jpg',
            imageXL:'5.jpg',
            name:'New Movie Quisque in Strack',
            category:'Latest Movie',
            views:'721'
        },
        {
            id:'04',
            imageSmall:'3-100x100.jpg',
            imageMedium:'3-300x300.jpg',
            imageXL:'3.jpg',
            name:'Movie Action Gorila English',
            category:'Latest Movie',
            views:'362'
        },
        {
            id:'05',
            imageSmall:'3-1-100x100.jpg',
            imageMedium:'3-1-300x300.jpg',
            imageXL:'3-1.jpg',
            name:'Action Gorila English Movie',
            category:'Latest Movie',
            views:'503'
        },
        {
            id:'06',
            imageSmall:'5-100x100 (1).jpg',
            imageMedium:'5-300x300.jpg',
            imageXL:'5-1.jpg',
            name:'Animate Blue Strack New Movie',
            category:'Latest Movie',
            views:'343'
        },
        {
            id:'07',
            imageSmall:'4-229x300.jpg',
            imageMedium:'',
            imageXL:'4.jpg',
            name:'Quisque in Strack New Movie',
            category:'Top Raiting',
            views:'339'
        },
        {
            id:'08',
            imageSmall:'3-222x300.jpg',
            imageMedium:'3-222x300.jpg',
            imageXL:'clown.jpg',
            name:'New Movie Quisque in Strack',
            category:'Top Rating',
            views:'339'
        },
       
    ],
    BlogList:[
        
        {
            id:'01',
            imageSmall:'blog-100x100.jpg',
            imageMedium:'blog-300x300.jpg',
            imageXL:'blog-570x570.jpg',
            name:'Actor The Concept Movie High Concept Theory See The Post',
            category:'Latest Movie',
           
        },
        {
            id:'02',
            imageSmall:'blog2-100x100.jpg',
            imageMedium:'blog2-300x300.jpg',
            imageXL:'img/blog2.jpg',
            name:'Consequat Nam Lectus Nibh Aucibus it Has Turpis ',
            category:'Latest Movie',
           
        },
        {
            id:'03',
            imageSmall:'blog3-150x150.jpg',
            imageMedium:'blog3-300x300.jpg',
            imageXL:'img/blog3-570x570.jpg',
            name:'Nam Lectus Nibh Consequat Aucibus Turpis It Has',
            category:'Latest Movie',
           
        },
        {
            id:'04',
            imageSmall:'blog4-150x150.jpg',
            imageMedium:'blog4-300x300.jpg',
            imageXL:'blog4-570x570.jpg',
            name:'Bring Me The Head of Alfredo Garcia Best Movie in',
            category:'Latest Movie',
           
        },
        {
            id:'05',
            imageSmall:'blog5-150x150.jpg',
            imageMedium:'blog5-300x300.jpg',
            imageXL:'blog5-570x570.jpg',
            name:'Pump Action Interaction English Action Movie(2020)',
            category:'Latest Movie',

        }
    ]
});