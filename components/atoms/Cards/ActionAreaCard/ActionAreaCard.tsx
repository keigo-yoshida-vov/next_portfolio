import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import scss from './action-area-card.module.scss'

interface Props {
    image: string;
    children: React.ReactElement;
    color: string;
    size: number;
    onClick: (event: any) => void;
}

export const ActionAreaCard = (props: Props) => {
    const { image, children, color, size, onClick } = props
    const url = '/card_images/' + image
    const styles: any = `${scss[color]}`
    return (
        <div className={`${scss.area}`}>
            <Card sx={{ maxWidth: size }
            }>
                <CardActionArea onClick={onClick}>
                    <CardMedia
                        component="img"
                        height="100"
                        image={url}
                        alt="cat"
                    />
                    <CardContent className={styles}>
                        {children}
                    </CardContent>
                </CardActionArea>
            </Card >
        </div>
    )
}
