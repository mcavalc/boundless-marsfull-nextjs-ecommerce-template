// import Link from 'next/link';
// import logoImg from '../../assets/logo.svg';

export default function FooterAbout({companyTitle}: {companyTitle?: string}) {
	const title = companyTitle || '© Piramide Imports.';
	return (
		<>
			{/* <div className='page-footer__logo'>
				<Link href='/'>
					<a>
						<img src={logoImg.src} width={logoImg.width} height={logoImg.height} alt={title} />
					</a>
				</Link>
			</div> */}
			<div className='page-footer__company-info'>
				<p className='title'>{title}</p>
				<p>
				<strong>CNPJ:</strong> 12.411.474.0001-05
			</p>

			</div>
			<div className='page-footer__disclaimer'>
			Este site e seu conteúdo são fornecidos 'como estão' e 'conforme disponíveis', sem qualquer garantia ou representação de qualquer tipo, seja expressa ou implícita.
			Informações sobre preço e disponibilidade estão sujeitas a mudanças sem aviso prévio.
			</div>
		</>
	);
}