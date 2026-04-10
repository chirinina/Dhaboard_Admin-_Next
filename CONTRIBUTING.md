# Contributing guide

¡Hola! 👋 Gracias por revisar este proyecto.
Toda forma de contribución es valiosa. A continuación se muestran las principales formas de participar:

## 1. Share Feedback and Ideas 💡

- Usa las **[Discussions](https://github.com/Diolay/Diolay/discussions/1)** en GitHub para compartir comentarios, sugerencias o ideas de mejora.
- Abre un **[Issue](https://github.com/Diolay/Diolay/issues)** si has encontrado un error o algo no funciona como se esperaba.

## 2. Support Development 🔥

Si deseas apoyar el desarrollo continuo del proyecto, puedes hacerlo a través de [**GitHub Sponsors**](https://github.com/sponsors/chirinina).

## 3. Contribute code

Siéntete libre de bifurcar el repositorio y enviar una solicitud de fusión. Si has detectado algo que se puede mejorar o arreglar, tu aporte es más que bienvenido.

### Development setup

```bash
git clone https://github.com/Diolay/Diolay.git
cd Diolay
npm install
npm run dev
```

La aplicación se ejecuta en `http://localhost:3000` en modo independiente con datos simulados, sin necesidad de backend.

Para explorar y desarrollar componentes de UI de forma aislada, ejecuta Storybook:

```bash
npm run storybook
```

Se abre en `http://localhost:6006`. Las historias viven junto con los componentes en los directorios `stories/`.

### Submitting a pull request

1. Bifurca el repositorio
2. Crea una rama desde `main` (`git checkout -b my-fix`)
3. Realiza tus cambios
4. Ejecuta las verificaciones antes de empujar:
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```
5. Empuja y abre una solicitud de extracción contra `main`

Los hooks de pre-commit de Husky ejecutarán automáticamente ESLint y Prettier en los archivos preparados.

### Code conventions

- Prefer exports nombradas sobre las predeterminadas
- Preferir funciones flecha sobre declaraciones de función
- Mantener los archivos por debajo de 300 líneas; dividirlos en módulos más pequeños si es necesario
- Agrupar importaciones: primero las bibliotecas externas, luego las importaciones internas, separadas por líneas en blanco
- Usar `async/await` con `try/catch` en lugar de `.then()/.catch()`
- Siempre registrar los errores en bloques `catch`
- Probar en modo oscuro y claro al tocar la UI
- Si agregas o cambias un componente de UI, verifica que las historias existentes sigan renderizándose correctamente en Storybook

### What makes a good PR

- Enfocado: una preocupación por PR
- Pasa todas las verificaciones de CI (lint, type-check, tests, build)
- Incluye una descripción clara de lo que cambió y por qué
- No introduce errores o advertencias de consola

## License Information for Contributors

Al enviar una contribución a este proyecto, aceptas que tus contribuciones están licenciadas bajo la Licencia MIT.
