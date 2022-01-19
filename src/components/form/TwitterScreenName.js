import React from 'react'

const TwitterScreenName = ({screen_name}) => {
    return (
        screen_name ? (
            <p
                className="link"
                style={{ marginBottom: '2rem' }}>
                @{screen_name} Successfully Linked
            </p>
        ) : (
            <ButtonWithLoading
                text="Authorize Twitter"
                variant="contained"
                href="https://callistobots.herokuapp.com/twitter/authorize"
            />
        )}
    )
}

export default TwitterScreenName
