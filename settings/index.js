

const settings =  {
    
    globals : {
        filterPresenterWithBio : {
            type : "condition", 
            required : ["avatar", "logotype", "bio"]
        },
        featuredPresenters : {
            type : "condition",
            required : ["avatar", "logotype", "bio", "featured"]
        },
        anotherTestGlobal : {type : "widget"},
        vipVisitor : {
            type : "props",
            data : {

            }
        }
    },

    pages : {

        speaking : {

            title : "",
            opengraph : "",
            widgets : [

            ]




        },

        vip : {
            title : "",
            opengraph : "",
            widgets : [
                {name : "WidgetVisitor", props : {
                    data : { important: 1 },
                    template : "ecommerceberlin-vip-registration",
                    label : "vips.register.title",
                    fields : [
                        {name: "referral", required: true},
                        {name: "email", required: true},
                        {name: "fname", required: true},
                        {name: "lname", required: true},
                        {name: "cname2", required: true},
                        {name: "position", required: true},
                        {name: "phone", required: true}
                      ],
                    start : ['referral', 'email', 'fname'],
                    first : true
                }},
                {name : "WidgetIconGrid", props : {
                    label : "vips.benefits.title" 
                }},
                {name : "WidgetVips", props : {
                    limit: 12,
                    mobile: 4
                }},
                // {name : "WidgetSchedule", props : { } },
                {name : "WidgetVideoWithEventInfo"},
                {name : "WidgetVisitor", props : {
                    data : { important: 1 },
                    template : "ecommerceberlin-vip-registration",
                    label : "vips.register.title",
                    fields : [
                        {name: "referral", required: true},
                        {name: "email", required: true},
                        {name: "fname", required: true},
                        {name: "lname", required: true},
                        {name: "cname2", required: true},
                        {name: "position", required: true},
                        {name: "phone", required: true}
                      ],
                    start : ['referral','email', 'cname2'],
                    // first : true
                }},
                {name : "WidgetIconGrid"},
                // {name : "WidgetPresenters", props : {
                //     disableTemps : true,
                //     label : "presenters.list_featured",
                //     limit : null,
                //     bio : true,
                //     filter : "@featuredPresenters"
                // }},
                // {name : "WidgetVisitor", props : {
                //     data : { important: 1 },
                //     template : "ecommerceberlin-vip-registration",
                //     label : "vips.register.title",
                //     fields : [
                //         {name: "referral", required: true},
                //         {name: "email", required: true},
                //         {name: "fname", required: true},
                //         {name: "lname", required: true},
                //         {name: "cname2", required: true},
                //         {name: "position", required: true},
                //         {name: "phone", required: true}
                //       ],
                //     start : ['referral', 'email', 'cname2'],
                //     // first : true
                // }},
            
            ],
        },

        presenters : {
            title : "",
            opengraph : "",
            widgets : [
                // {name : "WidgetPresenters", props : {
                //     first : true,
                //     disableTemps : true,
                //     label : "presenters.list_all",
                //     limit : null,
                //     bio : true,
                //     filter : "@filterPresenterWithBio"
                // }},
                {name : "WidgetVisitor", props : {label : "visitors.register_alt"} },
                {name : "WidgetVideoWithEventInfo"},
                // {name : "WidgetSchedule", props : { } },
                // {name : "WidgetVisitor", props : {label : "visitors.register"} },
            ]
        },

        schedule : {
            title : "",
            opengraph : "",
            widgets : [
                // {name : "WidgetSchedule", props : {first : true} },
                {name : "WidgetVisitor", props : {label : "visitors.register_alt"} },
                {name : "WidgetVideoWithEventInfo"},
                // {name : "WidgetPresenters", props : {
                //     disableTemps : true,
                //     label : "presenters.list_all",
                //     limit : null,
                //     bio : true,
                //     filter : "@filterPresenterWithBio"
                // }}
            ]   
        }

    },

    system : {
        ogTemplate: "",
        passwords : {
            'admin': '1751bfe48d5ad21fd9d'
        },
        lang_api_endpoint : 'https://localise.biz/api/export/all.json?format=multi&pretty&key=SHiwxgKaPMx_KThQH2zcdzwiKEMzuNBm',
        available_locales : ["pl", "en"],
        default_locale : "pl",
        api : "https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
    
    },
    hero : {

        videoSrc : "https://res.cloudinary.com/eventjuicer/video/upload/v1534454501/video_presenter_blak.mp4",
        background : "https://res.cloudinary.com/eventjuicer/image/upload/v1534542530/poster_presenter_blak.jpg",
        overlay : "red",
        template : "heroGold",
        heading : "event.claim",
        subheading : "event.description"
    },

    bookingmap : {
        height : 400,
        steps : [
            "choose_booth",
            "confirm",
            "pay",
            "access"
        ],
        allowedGroupIds : [309, 310, 311, 312, 313, 314, 315],
        disabledTicketIds : [],
        styles : {
            // light : null,
            // standard : 310,
            // hot : 311,
            // superhot : 312,
            // ultra : 313,
            // grand : 314,
            // stage : 315,
            // networking : 316
        },
        boothStyleMapping: {
            309: "light",
            310: "standard",
            311: "hot",
            312: "superHot",
            313: "ultra",
            314: "grand",
            315: "stage",
            316: "networking",
            321: "boothSold"
        },
        api : "https://stoiska.targiehandlu.pl/preorder"
    },


    speakers : {

        callforpapers: {
            
            fields: [
                {name: "email", required: true},
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "cname2", required: true},
                {name: "phone", required: true},
                {name: "presenter", required: true},  
                {
                  name: "presentation_category", 
                  required: true,
                  options : "categories"
                },
                {name: "presentation_title", required: true},
                {name: "presentation_description", required: true}
            ],
            
              start: [
                'presenter',
                'presentation_title', 
                'presentation_description',
                'presentation_category',
                'cname2'
            ],

            ticket_id : 1790,
            email_template : "pl-presenters-application",

        },


        benefits : {

            label: "presenters.steps.title",
            baseLabel: "presenters.steps",

            items: [

                {
                    icon : "FaSearch",
                    label :  'start',
                },
            
                {
                    icon : "FaPoll",
                    label : 'mentoring'
                },
            
                {
                    icon : "FaTrophy",
                    label : 'presentation'
                }
    
            ]
        }, 
    },

    vips : {

       benefits: {
            label : "vips.benefits.title",
            baseLabel : "vips.benefits",
            items : [

                {   
                    icon : "FaFastForward",
                    label : 'fastentry'
                },
            
                {   
                    icon : "FaChair",
                    label : 'seats'
                },
            
                {   
                    icon : "FaHandshake",
                    label : 'vipzone'
                }
            ]
            
       }
    },

    reviews : {

    },

    ui : {

        menuItems : [
            {
              name: 'general',
              items: [
                {name: 'home', to: '/'},
            
              ]
            },
            // {
            //   name: 'visitors',
            //   items: [
            //     {name: 'visit', to: '/visit'},
            //     // {name: 'schedule', to: '/schedule'},
            //     // {name: 'presenters', to: '/presenters'},
            //     // {name: 'exhibitors', to: '/exhibitors'},
            //     // {name: 'offers', to: '/offers'}
            //   ]
            // },
            // {
            //   name: 'exhibitors',
            //   items: [
            //     {name: 'exhibit', to: '/exhibit'},
            //     // {name: 'sample-visitors', to: '/sample-visitors'},
            //     // {name: 'exhibitors', to: '/exhibitors'},
            //     // {name: 'premium-services', to: '/premium'},
            //     // {name: 'faq', to: '/faq'},
              
            //   ]
            // }
        ]
    },

    premium : {

        ticketgroups : [331]

    },

    exhibitors : {
        ogTemplate: "template_teh19_exhibitor_",
        benefits : {
            baseLabel: "exhibitors.benefits",
            items: [
                {
                    icon : "FaHandshake",
                    label :  'outreach',
                },
                {   
                    icon : "FaComments",
                    label : 'feedback'
                },
                {   
                    icon : "FaSmile",
                    label : 'organizer'
                },
                {   
                    icon : "FaPiggyBank",
                    label : 'all_inclusive'
                },
                {
                    icon : "FaLink",
                    label : 'meet_clients'
                },
                {
                    icon : "FaLightbulb",
                    label : 'inspiration'
                }
            ]
        }
    },
    visitor : {

        register: {

            wrapperProps: {
                label : "visitors.register",
            },
            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
              {name: "position", required: true},
              {name: "nip", required: false},
              {name: "phone", required: true}
            ],
            start : ['email', 'fname'],
            ticket_id : 1730,
            email_template : "pl-visitors-registration",
            background : "/lanyard.jpg",

        },

        benefits : {

            baseLabel: "visitors.benefits",

            items: [

                {
                    icon : "FaLockOpen",
                    label :  'free_entry',
                },
            
                {
                    icon : "FaPiggyBank",
                    label : 'special_offers'
                },
            
                {
                    icon : "FaSearch",
                    label : 'insight'
                },
            
                {   
                    icon : "FaWrench",
                    label : 'case_studies'
                },
            
                {   
                    icon : "FaHandshake",
                    label : 'networking'
                },
            
                {   
                    icon : "FaChartLine",
                    label : 'future'
                }
        ]
        },
      
        api : "https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/register"
    },
    
    common : {

        organizer_name : 'Infoguru Sp. z o.o. Sp. k.',
        organizer_address : 'POLAND, Poznań, Truskawiecka 13',
        organizer_regno : 'VAT ID 7811967834',
        event_name : 'Targi eHandlu',
        event_location : 'EXPO XXI Warszawa, Prądzyńskiego 12/14',
        event_date : '2021',
        event_hours : '10:00-17:00',

    },

    rolebuttons : {
        accent : "gold",
        items : [
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/w_768,c_fit,f_auto/v1579000835/visit.jpg',
          label: 'common.visitor',
          width: '50%',
          target : "/visit"
        },
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/w_768,c_fit,f_auto/v1579000835/exhibit.jpg',
          label: 'common.exhibitor',
          width: '50%',
          target : "/exhibit"
        },
        ]
    },

    customer_support : {

    },

    sales_support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Karolina Michalak',
                position : 'Relationship Manager',
                langs : ["pl","en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1598009850/targiehandlu_people_km.jpg',
                phone: '+48 721 945 134',
                email: 'karolina.michalak@targiehandlu.pl',
                chatlio : true
            },
          
          ]
    },

    schedule : {
        times : {
            '10:30': 'presentation',
            '11:10': 'presentation',
            '11:50': 'presentation',
            '12:30': 'presentation',
            '13:00': 'break_20',
            '13:20': 'presentation',
            '14:00': 'presentation',
            '14:40': 'presentation',
            '15:20': 'presentation',
            '15:50': 'presentation'
          },    
          venues : {
            A: { company_id: 0 },
            B: { company_id: 0 },
            C: { company_id: 0 },
            D: { company_id: 0 },
            E: { company_id: 0 }
          },
        //   minimized : ["A", "C"],
          venueStyle : "gold",
    },

    footer : {
        iconStyle : "black",
        links : [
            {label: "exhibitors.agreement.title", href : "/legal-20200324"},
        ]
    },

    appbar : {
        links: [
            // {label: "covid19.link", color: "primary",  href: "/covid19", as: "/covid19", variant: "contained"}
        ],
    },

    cfpphotostream : {

        wrapperProps: {
            label : "cfp.gallery.title"
        },

        overlay: "red",

        cols: 12,

        items : [
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999866/www/speaking/witold_wrodarczyk.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999863/www/speaking/robert_stolarczyk.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999861/www/speaking/sempai.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999860/www/speaking/jakub_gierszynski.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999860/www/speaking/dominik_cison.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999860/www/speaking/felix_hubner.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999857/www/speaking/ireneusz_klimczak.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999855/www/speaking/freshworks.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999855/www/speaking/openstage.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999854/www/speaking/lead360.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999852/www/speaking/damian_wiszowaty.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999851/www/speaking/artur_jablonski.jpg", cols: 3}
        ]
    },

    cfptimeline: {

        baseLabel: "cfp.timeline",

        items : [
            {date: "2020-09-01", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2020-09-16", name: "qualification", icon:  "Assessment" },
            {date: "2020-09-21", name: "public-voting", icon:  "Public" },
            // {date: "2020-10-26", name: "jury-voting", icon:  "HowToVote" },
            {date: "2020-10-05", name: "results", icon:  "Mic", active: false },
            {date: "2020-10-06", name: "formal", icon:  "Settings", active: false }

        ]

    },

    covid19 : {

        visitors : {

            label: "covid19.visitors.title",
            secondaryLabel: "covid19.visitors.description",
            baseLabel: "covid19.visitors.rules",
            typography: "subtitle",
            dense: true,

            items: [

                {
                    icon : "Accepted",
                    label :  'accepted',
                },
            
                {
                    icon : "Invited",
                    label : 'invited'
                },
            
                {
                    icon : "Digital",
                    label : 'no-on-site-regdesk'
                }
    
            ]
        }, 

        exhibitors : {

            label: "covid19.exhibitors.title",
            secondaryLabel: "covid19.exhibitors.description",
            baseLabel: "covid19.exhibitors.rules",
            typography: "subtitle",
            dense: true,

            items: [

                {
                    icon : "Reps",
                    label :  'reps',
                },
            
                {
                    icon : "Banned",
                    label : 'noleaflets'
                },
            
                {
                    icon : "People",
                    label : 'exclusive'
                }

            ]
        },
        
        presenters : {

            label: "covid19.presenters.title",
            secondaryLabel: "covid19.presenters.description",
            baseLabel: "covid19.presenters.rules",
            typography: "subtitle",
            dense: true,
            
            items: [

                {
                    icon: "Audience",
                    label: 'audience-limit',
                },
            
                {
                    icon: "Live",
                    label: 'streaming'
                },
            
                // {
                //     icon: "FaTrophy",
                //     label: 'presentation'
                // }

            ]
        }

}


    
};

        

 export default settings