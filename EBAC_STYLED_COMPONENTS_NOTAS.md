
# Conversão para Styled-Components

Data: 2025-10-29 04:30

Componentes convertidos do uso de CSS Modules para **styled-components**:
- **Cabeçalho (Cabecalho)**: `src/components/Cabecalho/index.tsx`
- **Formulário (FormVagas)**: `src/components/Form/index.tsx`
- **Hero**: `src/components/Hero/index.tsx`
- **Vaga**: `src/components/Vaga/index.tsx`
- **ListaVagas** (container): `src/containers/ListaVagas/index.tsx`

### Dependências
- `styled-components`
- `@types/styled-components` (já no `devDependencies`)

### Observações
- Mantidas as props e estrutura funcional original.
- Estilos recriados com foco em responsividade, contraste e acessibilidade.
- Os arquivos `.module.css` antigos ficaram no projeto, porém **não são mais importados**.
- Caso queira remover CSS Modules, basta apagar os arquivos `.module.css`.

### Como rodar
```bash
npm install
npm start
```
