;; PMLL Traits Contract
;; Defines SIP-010 compatible fungible token interface

(define-trait sip010-ft-trait
  (
    ;; Transfer tokens
    (transfer 
      (amount uint) 
      (sender principal) 
      (recipient principal) 
      (memo (optional (buff 34)))
    )
    (response bool uint)

    ;; Get balance of account
    (get-balance 
      (owner principal)
    )
    (response uint uint)

    ;; Get total supply
    (get-total-supply)
    (response uint uint)

    ;; Get token decimals
    (get-decimals)
    (response uint uint)

    ;; Get token name
    (get-name)
    (response (string-ascii 32) uint)

    ;; Get token symbol
    (get-symbol)
    (response (string-ascii 32) uint)
  )
)
