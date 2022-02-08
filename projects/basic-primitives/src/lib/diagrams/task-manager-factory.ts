export class TaskManagerFactory {
    factory: any | null;
    eventArgs: any | null;

    constructor(factory: any, eventArgs: any) {
        this.factory = factory;
        this.eventArgs = eventArgs;
    }
}