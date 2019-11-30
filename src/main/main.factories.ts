import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResumeService } from '@shared';

export class ObservableResolver implements Resolve<any> {

    constructor(private getFn: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Observable<any>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const obs = this.getFn(route, state);
        return obs;
    }

}

export const DataResolverFactory = (ser: ResumeService): any => {

    return new ObservableResolver((r, s) => {
        return ser.getData();
    });
};


