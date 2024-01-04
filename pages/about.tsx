import {GetServerSideProps} from 'next';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IMenuItem} from '../@types/components';
import MainLayout from '../layouts/Main';

export default function ShippingPage({mainMenu, footerMenu}: IPageProps) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Sobre a Piramide Imports</h1>
				<div className='text-container'>
					<p>
					A história da Piramide Imports é uma jornada de paixão e dedicação ao comércio. Tudo começou com o pai, um pioneiro no ramo, que se dedicou a vender seus produtos no vibrante centro de São Paulo, percorrendo locais como a famosa Santa Ifigênia e diversas outras galerias pela cidade. Sua determinação e amor pelo comércio marcaram o início de uma trajetória inspiradora.
					</p>
					<p>
					Hoje, a missão é continuada pelos filhos, que herdaram não apenas o negócio, mas também a paixão do pai. Eles estão levando a Piramide Imports a novos horizontes, abraçando a era digital para expandir o alcance da empresa. Com o apoio da internet, agora atendemos todo o Brasil, operando incansavelmente 24 horas por dia, 7 dias por semana.	
					</p>
					<p>
					Na Piramide Imports, somos apaixonados tanto por produtos nacionais quanto importados, e temos um carinho especial pela tecnologia. Essa paixão nos motiva a ir além, garantindo que oferecemos apenas o melhor aos nossos clientes. Nosso time de especialistas é meticuloso na escolha dos produtos, sempre buscando a melhor relação custo-benefício. Para nós, qualidade e acessibilidade andam de mãos dadas.	
					</p>
					<p>
					Em nossa loja, você encontrará uma gama diversificada de produtos, escolhidos a dedo por quem entende do assunto. Seja bem-vindo à Piramide Imports, onde a tradição encontra a inovação, e cada cliente é parte da nossa história contínua.	
					</p>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			...menus
		}
	};
};

interface IPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}