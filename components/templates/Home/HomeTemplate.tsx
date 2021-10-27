import React, { memo, useState, useCallback } from 'react'
import scss from './home-template.module.scss'
import { BaseHeader } from '@/components/organisms/header/BaseHeader/BaseHeader'

export const HomeTemplate = memo(() => {

    return (
        <>
            <main className={`${scss.main}`}>
                <BaseHeader />
                <p>contents</p>
            </main>
        </>
    )
})

HomeTemplate.displayName = 'HomeTemplate'
