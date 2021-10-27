import React, { memo, useState, useCallback } from 'react'
import scss from './home-template.module.scss'
import { BaseHeader } from '@/components/organisms/header/BaseHeader/BaseHeader'
import { ActionAreaCard } from '@/components/atoms/Cards/ActionAreaCard/ActionAreaCard'

export const HomeTemplate = memo(() => {
    const onClickCard = () => {
        alert('click')
    }
    return (
        <>
            <main className={`${scss.main}`}>
                <BaseHeader />
                <ActionAreaCard image='cat.jpg' color='lightgray' size={300} onClick={onClickCard}>
                    <div>
                        <p>title</p>
                        <p>contents</p>
                        <p>contents</p>
                    </div>
                </ActionAreaCard>
            </main>
        </>
    )
})

HomeTemplate.displayName = 'HomeTemplate'
