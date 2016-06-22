import { AuthGuard } from '../providers/auth.guard';
import { AuthService } from '../services/auth.service';

export const AUTH_PROVIDERS = [AuthGuard, AuthService];