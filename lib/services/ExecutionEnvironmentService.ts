class ExecutionEnvironmentService {
  public canUseDom: boolean;

  public constructor () {
    this.canUseDom = Boolean(
      /* eslint-disable @typescript-eslint/unbound-method */
      typeof window !== 'undefined' &&
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      window.document &&
      window.document.createElement
      /* eslint-enable @typescript-eslint/unbound-method */
    );
  }
}

export { ExecutionEnvironmentService };
