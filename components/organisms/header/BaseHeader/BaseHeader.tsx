import { FullScreenDialog } from '@/components/atoms/dialogs/FullScreenDialog/FullScreenDialog'
import React, { memo, useEffect, useState } from 'react'
import scss from './base-header.module.scss'

export const BaseHeader = memo(() => {
    return (
        <>
            <div className={`${scss.header_width}`}>
                <ul className={`${scss.header_flex}`}>
                    <li className={`${scss.content_styles}`}>Contents</li>
                    <li className={`${scss.content_styles}`}>Contents</li>
                    <li className={`${scss.content_styles}`}>Contents</li>
                    <li className={`${scss.content_styles}`}>Contents</li>
                    <li className={`${scss.content_styles}`}>Contents</li>
                    <li className={`${scss.menu_styles}`} ><FullScreenDialog /></li>
                </ul>
            </div>
        </>
    )
})

BaseHeader.displayName = 'BaseHeader'
