Create empty angular workspace
```
ng new angular --no-create-application
```

Add basic-primitives library project
```
cd angular
ng generate library basic-primitives
```

Rename package name to `basicprimitivesangular`

Build basic-primitives library

```
ng build basic-primitives
```

Build and watch basic-primitives library

```
ng build basic-primitives --watch
```

Add samples project

```
ng generate application samples
```

Serve samples application

```
ng serve
```

Add `org-diagram` component to `basic-primitives` library
```
ng generate component org-diagram --project=basic-primitives
```

Add `org-config` configuration class to `basic-primitives` library

```
ng generate class configs/org-config --project=basic-primitives --skip-tests
```

Add First Organizational Chart Component to Samples

```
ng generate component first-organizational-chart --project=samples
```