const headerAnimationBlocks = [
    [
        {
            width: 50,
            height: 10,
            startProcessInfo: {
                left: 0,
                top: 0
            },
            endProcessInfo: {
                left: 20,
                top: 10
            }
        },
        {
            width: 14,
            height: 40,
            startProcessInfo: {
                left: 0,
                top: 0
            },
            endProcessInfo: {
                top: 22,
                left: 56
            }
        },
        {
            width: 34,
            height: 40,
            startProcessInfo: {
                left: 60,
                top: 0
            },
            endProcessInfo: {
                top: 22,
                left: 20
            }
        }
    ],
    [
        {
            width: 50,
            height: 14,
            startProcessInfo: {
                left: 0,
                top: 0
            },
            endProcessInfo: {
                left: 20,
                top: 10
            }
        },
        {
            width: 24,
            height: 20,
            startProcessInfo: {
                left: 0,
                top: 0
            },
            endProcessInfo: {
                top: 27,
                left: 20
            }
        },
        {
            width: 24,
            height: 20,
            startProcessInfo: {
                left: 60,
                top: 0
            },
            endProcessInfo: {
                top: 27,
                left: 46
            },
        },
        {
            width: 35,
            height: 20,
            startProcessInfo: {
                left: 60,
                top: 0
            },
            endProcessInfo: {
                top: 50,
                left: 20
            }
        },
        {
            width: 13,
            height: 20,
            startProcessInfo: {
                left: 60,
                top: 0
            },
            endProcessInfo: {
                top: 50,
                left: 57
            }
        }
    ],
    [
        {
            width: 50,
            height: 14,
            startProcessInfo: {
                left: 20,
                top: 20
            },
            endProcessInfo: {
                top: 10,
                left: 20
            }
        },
        {
            width: 15,
            height: 20,
            startProcessInfo: {
                left: 10,
                top: 10
            },
            endProcessInfo: {
                top: 26,
                left: 20
            }
        },
        {
            width: 15,
            height: 20,
            startProcessInfo: {
                left: 30,
                top: 5
            },
            endProcessInfo: {
                top: 26,
                left: 55
            }
        },
        {
            width: 16,
            height: 20,
            startProcessInfo: {
                left: 10,
                top: 20
            },
            endProcessInfo: {
                top: 26,
                left: 37
            }
        },
        {
            width: 33,
            height: 20,
            startProcessInfo: {
                left: 30,
                top: 10
            },
            endProcessInfo: {
                top: 48,
                left: 20
            }
        },
        {
            width: 15,
            height: 20,
            startProcessInfo: {
                left: 20,
                top: 5
            },
            endProcessInfo: {
                top: 48,
                left: 55
            }
        }
    ]
]
const activeClass = 'active';
const preloaderBlock = document.getElementById('preloader');


$(window).on('load', function (){
    preloaderBlock.style.display = 'none';
})

const navbarSite = $('.navbar-site');
const navbarMenu = $('.navbar-site a');
const activeLink = window.location.pathname;
const contentSite = $('.content-site');
const MainParrent = $('.main-parrent');
const mainBlocks = $('.content-site .main');


navbarMenu.map((menu, elem) => {
    const element = $(elem);
    if(element.attr('href') === activeLink && !element.hasClass('navbar-logo')){
        goToActiveMain(element);
    }
})

function goToActiveMain(element){
    const contentSliderBlock = $('.content-site .content-slider-block');
    const mainID = element.attr('href') === '/' ? 'home' : element.attr('href').replace(/[/]/g, '');
    const IDName = `main__${mainID}`;
    MainParrent.removeClass(activeClass);
    navbarMenu.removeClass(activeClass);


    const main = $(`#${IDName}`);
    const browserWidth = $(window).width();
    const currentBlock = main.width();

    const BrowserAndBlock = (browserWidth - currentBlock) / 2;


    const tranformCss = (-main.offset().left + BrowserAndBlock);
    contentSliderBlock.css('transform', `translateX(${tranformCss}px)`);
    element.addClass(activeClass)

    setTimeout(() => {
        $(`#${IDName}`).parent('.main-parrent').addClass(activeClass);
    }, 1000)

    mainBlocks.css('transform', 'rotateX(50deg) translateY(-160px)')

}



function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomTextNumber = Math.floor(Math.random() * characters.length);
    for (let i = 0; i < length; i++) {
        result += characters[randomTextNumber];
    }
    return result;
}

function randomNumberMinMax(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function randomBg() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

const devTeams = [
    'Front End',
    'Back End',
    'Desginer',
    'Tester',
    'Project Manager',
]
const header = $('#header-site');
let HAN = 0;
let timeout = 10000;

setInterval(() => {
    if (HAN < headerAnimationBlocks.length) {
        headerAnimationBlocks[HAN].map((animBlock) => {
            const blockID = makeid(15);
            const randomNumber = Math.floor(Math.random() * devTeams.length);
            const randomNumberFortransition = randomNumberMinMax(timeout / 1000 / 2, 3);
            header.append(`
                    <div id="${blockID}" class="anim-block-header" style="
                        width: ${animBlock.width}%; 
                        height: ${animBlock.height}%;
                        left: ${animBlock.startProcessInfo.left}%;
                        top: ${animBlock.startProcessInfo.top}%;
                        opacity: 0;
                        transition: ${randomNumberFortransition}s;
                    ">
                        <div class="anim-block-corner"></div>
                        <div class="anim-block-corner"></div>
                        <div class="anim-block-corner"></div>
                        <div class="anim-block-corner"></div>
                        <div class="dev-user" style="left: ${randomNumberMinMax(60, 10)}%; top: ${randomNumberMinMax(60, 10)}%">
                            <i class="fas fa-mouse-pointer" style="color: ${randomBg()}"></i>
                            <span>
                                ${devTeams[randomNumber]}
                            </span>
                        </div>
                    </div>
                `)
            startAnimationToHeader(blockID, animBlock, randomNumberFortransition);
        })
        HAN++;
    } else {
        HAN = 0;
    }
}, timeout * 1.3)


function startAnimationToHeader(blockID, params, transTime) {
    const block = $(`#${blockID}`);
    const time = transTime * 1000;

    setTimeout(() => {
        block.css({
            opacity: 1
        })
    }, time / 3)

    setTimeout(() => {
        block.css({
            left: `${params.endProcessInfo.left}%`,
            top: `${params.endProcessInfo.top}%`,
            opacity: 1
        })
    }, time  / 3)

    setTimeout(() => {
        block.css({
            left: `${params.startProcessInfo.left}%`,
            top: `${params.startProcessInfo.top}%`,
            opacity: 0
        })
        setTimeout(() => {
            block[0].outerHTML = '';
        }, time)
    }, time * 2.5)
}



const mainPricesNames = $('#main__prices .prices-body .left-block .names');
const mainPricesAnimBlock = $('#main__prices .prices-body .left-block .anim-block');
const infoBlocks = $('#main__prices .prices-body .right-block .info-block');

mainPricesNames.on('click', function (){
    console.log(this.offsetTop)
    mainPricesNames.removeClass(activeClass);
    $(this).addClass(activeClass);
    mainPricesAnimBlock.css('top', `${this.offsetTop}px`);

    const thisName = $(this).data('name');
    infoBlocks.addClass('d-none');
    infoBlocks.map((index, element) => {
        const elm = $(element)
        if(elm.children('h1').text() === thisName){
            elm.removeClass('d-none')
        }
    })

})



// '#main__prices .prices-body .right-block .info-block'

