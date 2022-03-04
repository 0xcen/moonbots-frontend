import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordMessage,
} from '@skyra/discord-components-react';
import img from './../img/favicon/me_favicon.png';

const DiscordSalesMockup = ({ props }) => {
	const inlineIndex = () => {
		let i = 1;
		// if (fp_solananart) i++;
		// if (fp_me) i++;
		// if (total_listed) i++;
		// FIX: return i
		return 2;
	};

	return (
		<DiscordMessage slot='embed'>
			<DiscordEmbed
				authorName='Magic Eden'
				authorUrl='https://magiceden.io/collections/ubik'
				authorImage={img}
				embedTitle={`${props.mintObject.title} → SOLD`}
				image={props.mintObject.img}
				color='#802482'>
				<DiscordEmbedFields slot='fields'>
					<DiscordEmbedField fieldTitle='Price'>
						{(
							props.parsedTransaction.total_amount / 1000000000
						).toFixed(2)}{' '}
						Ⓞ
					</DiscordEmbedField>
					<DiscordEmbedField
						fieldTitle='Buyer'
						inline
						inlineIndex={1}>
						<a
							href={`https://solscan.io/account/${props.parsedTransaction.buyer_address}`}
							target='_blank'
							rel='noreferrer'>{`${props.parsedTransaction.buyer_address.slice(
							0,
							4
						)}...${props.parsedTransaction.buyer_address.slice(
							-4
						)}`}</a>
					</DiscordEmbedField>
					<DiscordEmbedField
						fieldTitle='Seller'
						inline
						inlineIndex={2}>
						{
							<a
								href={`https://solscan.io/account/${props.parsedTransaction.seller_address}`}
								target='_blank'
								rel='noreferrer'>{`${props.parsedTransaction.seller_address.slice(
								0,
								4
							)}...${props.parsedTransaction.seller_address.slice(
								-4
							)}`}</a>
						}
					</DiscordEmbedField>
					<DiscordEmbedField fieldTitle='Mint Token (Click for TXN)'>
						{
							<a
								href={`https://solscan.io/token/${props.mint}`}
								target='_blank'
								rel='noreferrer'>
								{props.mint}
							</a>
						}
					</DiscordEmbedField>

					{
						<DiscordEmbedField
							fieldTitle='FP Magic Eden'
							inline
							inlineIndex={1}>
							{`${(props.floorPrice / 1000000000).toFixed(2)} Ⓞ`}
						</DiscordEmbedField>
					}

					{props.fp_solanart && (
						<DiscordEmbedField
							fieldTitle='FP Solanart'
							inline
							inlineIndex={2}>
							{'0.25 Ⓞ'}
						</DiscordEmbedField>
					)}
					<DiscordEmbedField
						fieldTitle='Total Listed'
						inline
						inlineIndex={inlineIndex() === 3 ? 3 : 2}>
						{props.listedCount}
					</DiscordEmbedField>
				</DiscordEmbedFields>
			</DiscordEmbed>
		</DiscordMessage>
	);
};

export default DiscordSalesMockup;
