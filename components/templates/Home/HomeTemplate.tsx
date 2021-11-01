import { CustomSpeedDial } from '@/components/atoms/dials/SpeedDial/SpeedDial'
import React, { memo } from 'react'
import scss from './home-template.module.scss'

export const HomeTemplate = memo(() => {
    return (
        <>
            <main className={`${scss.main}`}>
                <div>
                    <p>
                    </p>
                </div>
            </main>
        </>
    )
})

HomeTemplate.displayName = 'HomeTemplate'
