;; SIP-010-Trait
;; The standard interface for Fungible Tokens on Stacks

(define-trait sip-010-trait
  (
    ;; Transfer from the caller to a new principal
    (transfer (uint principal principal (optional (buff 34))) (response bool uint))

    ;; Human readable name of the token
    (get-name () (response (string-ascii 32) uint))

    ;; Human readable symbol of the token
    (get-symbol () (response (string-ascii 32) uint))

    ;; the number of decimals used
    (get-decimals () (response uint uint))

    ;; the current total supply (optional)
    (get-total-supply () (response uint uint))

    ;; an optional URI that represents metadata of this token
    (get-token-uri () (response (optional (string-utf8 256)) uint))
  )
)