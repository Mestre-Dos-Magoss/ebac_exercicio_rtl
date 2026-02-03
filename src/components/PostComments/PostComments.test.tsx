import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        const { debug } = render(<PostComment/>);
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários a listagem de posts', () => {
        const { debug } = render(<PostComment />)
        const valorInserido1 = 'Uau, ela é bonita mesma, aonde o senhor comprou?'
        const valorInserido2 =  'Você pagou quantos nela ? te dou R$ 150.00 por ela'

        fireEvent.change(screen.getByTestId('campo-comentario'),{
            target: {
                value: 'Uau, ela é bonita mesma, aonde o senhor comprou?'
            }
        })
    fireEvent.click(screen.getByTestId('btn-comentar'))
        fireEvent.change(screen.getByTestId('campo-comentario'),{
            target: {
                value: 'Você pagou quantos nela ? te dou R$ 150.00 por ela'
        }
    })
    fireEvent.click(screen.getByTestId('btn-comentar'))
    // eslint-disable-next-line testing-library/no-debugging-utils
    debug()
    expect(screen.getByText(valorInserido1)).toBeInTheDocument()
    expect(screen.getByText(valorInserido2)).toBeInTheDocument()
    })
})