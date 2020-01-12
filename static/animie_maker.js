
"use strict"
my.ready(function () {
    var main = my(".girl");

     var loading = my(".load-wrapp");
    var girl_costume = my(".girl_costume");
    var girl_mouth = my(".girl_mouth");
    var girl_face = my(".girl_face");
    var girl_hair = my(".girl_hair");
    var girl_eye = my(".girl_eye");

    var girl_brow = my(".girl_brow");
    var girl_glass = my(".girl_glass");
 var girl_star = my(".girl_star");
    var girl_hat = my(".girl_hat");

    var item1 = my(".cloth_collection .flex-container li");



    var faceitem = my(".face_collection .flex-container li");

var staritem = my(".star_collection .flex-container li");
    var hatitem = my(".hat_collection .flex-container li");


    var mouthitem = my(".mouth_collection .flex-container li");

    var glassitem = my(".glass_collection .flex-container li");

    var hairitem = my(".hair_collection .flex-container li");

    var eyeitem = my(".eye_collection .flex-container li");

    var browitem = my(".brow_collection .flex-container li");


    var icons = my(".scrollmenu a");

    var itemscollections = my(".items div");

    loading.display('none')
    
    main.css(
        my.prefix('animation'),
        'comp 4s linear 1'
    )
    .css(
        my.prefix('animation-fill-mode'), 'forwards'
    )
    .css('z-index', 1000)
    
    icons.each(function (i) {
        my(this).click(function () {
            itemscollections
            .each(function () {
                my(this)
                    .display('none')
            })
            .eq(i)
                .display('block')
        })
    })
    
    var img1s = 'https://i.imgur.com/5pVky7H.png https://i.imgur.com/DwX6avr.png https://i.imgur.com/vZ53yYJ.png https://i.imgur.com/jiOXLaE.png https://i.imgur.com/q3o92R2.png https://i.imgur.com/5lNsTZW.png https://i.imgur.com/6XRLV4k.png https://i.imgur.com/rGNAr7k.png https://i.imgur.com/efIJ9Qx.png'.split(' ')
    item1.each(function (i) {
        my(this).click(function () {
            girl_costume.attr('src', img1s[i])
        })
    })
    
    var faceitems = 'https://i.imgur.com/jIyrUpe.png https://i.imgur.com/28dC2d9.png https://i.imgur.com/Hdg5M1h.png https://i.imgur.com/B9fRnFS.png https://i.imgur.com/yEJpwsp.png https://i.imgur.com/aETVSWK.png https://i.imgur.com/9Xk37mD.png https://i.imgur.com/vbTxmAO.png https://i.imgur.com/iQ4wi3n.png'.split(' ')
    faceitem.each(function (i) {
        my(this).click(function () {
            girl_face.attr('src', faceitems[i])
        })
    })

    var hairitems = 'https://i.imgur.com/PB9i3S6.png https://i.imgur.com/SaBXM6k.png https://i.imgur.com/AXuc0dV.png https://i.imgur.com/9edGmOM.png https://i.imgur.com/PJZnAtN.png https://i.imgur.com/1EE1MSU.png https://i.imgur.com/TKikrlF.png https://i.imgur.com/Q6SD91L.png https://i.imgur.com/CvJK22q.png https://i.imgur.com/1T7Uoec.png https://i.imgur.com/67VrBt8.png https://i.imgur.com/KGTNKjR.png https://i.imgur.com/kAt4TOl.png https://i.imgur.com/aVljwsq.png https://i.imgur.com/aGAoymQ.png https://i.imgur.com/mnP04qv.png https://i.imgur.com/LyOd9va.png https://i.imgur.com/1tJvcqz.png'.split(' ')
    hairitem.each(function (i) {
        my(this).click(function () {
            girl_hair.attr('src', hairitems[i])
        })
    })

    var eyeitems = "https://i.imgur.com/2o93Ckz.png https://i.imgur.com/LJWk3Pv.png https://i.imgur.com/Dbc8AfP.png https://i.imgur.com/jRAIfOM.png https://i.imgur.com/0kchcsG.png https://i.imgur.com/dukDGAn.png https://i.imgur.com/jfnH9Ev.png https://i.imgur.com/st3Frkv.png https://i.imgur.com/pBjSH0J.png https://i.imgur.com/x7xIdPw.png https://i.imgur.com/AzQd4iE.png https://i.imgur.com/cCWeqHs.png https://i.imgur.com/31YNWpv.png https://i.imgur.com/uGOI3p6.png https://i.imgur.com/tR6ahXh.png https://i.imgur.com/AsHHxsn.png https://i.imgur.com/nQJm5ev.png https://i.imgur.com/XAaQrlw.png https://i.imgur.com/7AKflM2.png https://i.imgur.com/tgMre5k.png https://i.imgur.com/H65BENo.png https://i.imgur.com/p5p5pfz.png https://i.imgur.com/J5pWbwU.png https://i.imgur.com/AqXwEwj.png https://i.imgur.com/j1r3NI7.png https://i.imgur.com/aZOvpT9.png https://i.imgur.com/E4YhWWq.png https://i.imgur.com/Q1K8UV4.png https://i.imgur.com/pV1eHD0.png https://i.imgur.com/4eSYim5.png".split(' ')
    eyeitem.each(function (i) {
        my(this).click(function () {
            girl_eye.attr('src', eyeitems[i])
        })
    })
    
    var browitems = "https://i.imgur.com/g2Cy4DC.png https://i.imgur.com/dzdBnOC.png https://i.imgur.com/x9VwUKQ.png https://i.imgur.com/wyvMr9q.png https://i.imgur.com/CSze5xB.png https://i.imgur.com/noq2FJh.png https://i.imgur.com/yawpukG.png https://i.imgur.com/jzODXqc.png https://i.imgur.com/oHWLZCc.png https://i.imgur.com/X1Vt1FR.png https://i.imgur.com/ezOWaO5.png https://i.imgur.com/KSrJfrs.png https://i.imgur.com/ccTScdq.png https://i.imgur.com/YfDsYSL.png https://i.imgur.com/pCN4881.png https://i.imgur.com/iXZvv7r.png https://i.imgur.com/WUeoT1B.png https://i.imgur.com/SzeRCRM.png".split(' ')
    browitem.each(function (i) {
        my(this).click(function () {
            girl_brow.attr('src', browitems[i])
        })
    })
    
    var glassitems = " https://i.imgur.com/IfRih7K.png https://i.imgur.com/CzpOUxS.png https://i.imgur.com/7XtSK8c.png https://i.imgur.com/1RJS8vZ.png https://i.imgur.com/4Ky0tMP.png https://i.imgur.com/nkaMWLq.png https://i.imgur.com/nftcqRB.png https://i.imgur.com/IpYvVDu.png".split(' ')
    glassitem.each(function (i) {
        my(this).click(function () {
            girl_glass.attr('src', glassitems[i])
        })
    })
    
    var mouthitems = "https://i.imgur.com/mCXkUxV.png https://i.imgur.com/rhsGgrv.png https://i.imgur.com/HcsKqbB.png https://i.imgur.com/RTDF7CG.png https://i.imgur.com/xQs4Z3A.png https://i.imgur.com/Kbqtasg.png https://i.imgur.com/oXzxSBm.png https://i.imgur.com/rVkYBaS.png https://i.imgur.com/sTBhds5.png https://i.imgur.com/2FXPirh.png https://i.imgur.com/U9G3V6Q.png https://i.imgur.com/o2Q3rVa.png https://i.imgur.com/Cak8Y7x.png https://i.imgur.com/VJQWdxz.png https://i.imgur.com/7ucTrDZ.png".split(' ')
    mouthitem.each(function (i) {
        my(this).click(function () {
            girl_mouth.attr('src', mouthitems[i])
        })
    })

    var hatitems = " https://i.imgur.com/6ZxLsS8.png https://i.imgur.com/DQIi71m.png https://i.imgur.com/ziyzCvy.png https://i.imgur.com/x9JKYqs.png https://i.imgur.com/3uhy3sO.png https://i.imgur.com/tKHymuw.png https://i.imgur.com/HqAjVmN.png https://i.imgur.com/4L7YTyE.png https://i.imgur.com/dkgzqRG.png https://i.imgur.com/qPc1oJk.png https://i.imgur.com/SQAilBO.png https://i.imgur.com/yi3T0B4.png https://i.imgur.com/Q1dDpO9.png https://i.imgur.com/x27hRER.png https://i.imgur.com/CFeuVkH.png https://i.imgur.com/xnjYKWK.png https://i.imgur.com/7k50bR3.png https://i.imgur.com/wuxmmgb.png https://i.imgur.com/4yP2dw0.png https://i.imgur.com/Nu6tqal.png".split(' ')
    hatitem.each(function (i) {
        my(this).click(function () {
            girl_hat.attr('src', hatitems[i])
        })
    })
    
    var staritems = " https://i.imgur.com/H86SHKX.png https://i.imgur.com/PbUbpZq.png https://i.imgur.com/3PwsSa8.png https://i.imgur.com/le4BCIR.png https://i.imgur.com/dqf1xRO.png https://i.imgur.com/9oNeHRK.png https://i.imgur.com/2IGZyvd.png https://i.imgur.com/jmctl28.png".split(' ')
    staritem.each(function (i) {
        my(this).click(function () {
            girl_star.attr('src', staritems[i])
        })
    })
})
