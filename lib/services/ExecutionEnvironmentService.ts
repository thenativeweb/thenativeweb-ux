class ExecutionEnvironmentService {
  public canUseDom: boolean;

  public constructor () {
    this.canUseDom = Boolean(
      /* eslint-disable @typescript-eslint/unbound-method, @typescript-eslint/no-unnecessary-condition */
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
      /* eslint-enable @typescript-eslint/unbound-method, @typescript-eslint/no-unnecessary-condition */
    );
  }
}

export { ExecutionEnvironmentService };
