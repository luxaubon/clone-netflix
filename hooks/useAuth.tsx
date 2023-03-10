import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
  } from 'firebase/auth'
  
  import { useRouter } from 'next/router'
  import { createContext, useContext, useEffect, useMemo, useState } from 'react'
  import { auth } from '../firebase'

  interface IAuth {
        user: User | null
        signUp: (email: string, password: string) => Promise<void>
        signIn: (email: string, password: string) => Promise<void>
        logout: () => Promise<void>
        error: string | null
        loading: boolean
    }
  const AuthContext = createContext<IAuth>({
    user: null,
    signUp: async () => {},
    signIn: async () => {},
    logout: async () => {},
    error: null,
    loading: false,
  })
  interface Props {
    children: React.ReactNode
    }
   
  export const AuthProvider = ({ children }: Props) => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)
    const [initialLoading, setInitialLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // const unsubscribe = onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //         setUser(user);
        //         setLoading(false);
        //     } else {
        //         setUser(null);
        //         setLoading(true);
        //         router.push('/login');
        //     }
        //     setInitialLoading(false);
        // })
        // return unsubscribe;

        setInitialLoading(false);
        setLoading(false);
    }),[auth];
    

    const signUp = async (email: string, password: string) => {
        setLoading(true);

        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then((userCredential) => {
            setUser(userCredential.user);
            router.push('/');
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            alert(error.message);
        }).finally(() => {
            setLoading(false);
        });
    }
    
    const signIn = async (email: string, password: string) => {
        setLoading(true);

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then((userCredential) => {
            setUser(userCredential.user);
            router.push('/');
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            alert(error.message);
        }).finally(() => {
            setLoading(false);
        });
    }

    const logout = async () => {
        setLoading(true);
        signOut(auth).then(()=>{
            setUser(null);
        })
        .catch((error)=>alert(error.message))
        .finally(()=>{setLoading(false)});
    }

    const  memoValue = useMemo(
        () => ({ 
            user, loading, signUp, signIn, logout,error 
        }), [user, loading,error])

    return  <AuthContext.Provider value={memoValue}>
                {!initialLoading && children}
            </AuthContext.Provider>

}

export default function useAuth() {
    return useContext(AuthContext)
}
