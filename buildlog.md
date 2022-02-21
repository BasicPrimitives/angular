Create empty angular workspace
```
ng new angular --no-create-application
```

Add ngx-basic-primitives library project
```
cd angular
ng generate library ngx-basic-primitives
```

Build ngx-basic-primitives library

```
ng build ngx-basic-primitives
```

Build and watch ngx-basic-primitives library

```
ng build ngx-basic-primitives --watch
```

Add samples project

```
ng generate application samples
```

Serve samples application

```
ng serve
```

Add `org-diagram` component to `ngx-basic-primitives` library
```
ng generate component org-diagram --project=ngx-basic-primitives
```

Add `org-config` configuration class to `ngx-basic-primitives` library

```
ng generate class configs/org-config --project=ngx-basic-primitives --skip-tests
```

Add First Organizational Chart Component to Samples

```
ng generate component first-organizational-chart --project=samples
```