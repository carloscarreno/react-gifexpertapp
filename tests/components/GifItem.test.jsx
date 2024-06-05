
import { render , screen} from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';


describe('Pruebas de <GifItem>', () => { 
 
    const title ='Godwana';
    const url = 'https://godwana.com/godwana.gif';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
     });


    test('debe mostrar la imagen con el url y el alt', () => { 
        render(<GifItem title={title} url={url} />);
        screen.debug();
        const { src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);      

      });

    test('debe mostrar el titulo', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
      });

});

