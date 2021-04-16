import React, { Component } from 'react'

export default function Header() {
    return ( 
        <div>
            <div className="header">
                <div className="header-left">
                    <a href="#!" className="download">下载APP</a>
                    <a href="#!" className="register">注册头条号</a>
                    <div className="weather">
                        <span>&nbsp;北京</span><span>阴</span><span>2℃ &nbsp;/&nbsp; 10℃</span><span className="arrow-down"></span>
                    </div>
                </div>

                <div className="header-right">
                    <a href="#!" className="complains">侵权投诉</a>
                    <a href="#!" className="products">头条产品</a>
                </div>
            </div>
            <style jsx>{`
                .header {
                    width: 100%;
                    height: 34px;
                    background-color: #222;
                    font-size: 14px;
                    color: #fff;
                    line-height: 34px;
                    margin-bottom: 16px;
                }

                .header-left {
                    display: inline-block;
                }

                .header a {
                    padding: 0 10px;
                    color: #fff;
                    float: left;
                }

                .download {
                    border-right: 1px solid #3a3a3a;
                }

                .weather {
                    display: inline-block;
                    padding-left: 7px;
                    cursor: pointer;
                }

                .weather span {
                    margin-right: 11px;
                    display: inline-block;
                }

                .arrow-down {
                    /* font-family: "icomoon"; */
                    font-size: 18px;
                    line-height: 1;
                }

                .arrow-down::before {
                    content: "\ea52";
                }

                .header-right {
                    float: right;
                }

                .products {
                    border-left: 1px solid #3a3a3a;
                }
            `}</style>
        </div>
    )
}